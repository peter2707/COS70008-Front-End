import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./ContentManagement.css";

export function ContentManagement() {
    const [contentType, setContentType] = useState("FAQ");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [articleContent, setArticleContent] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [date, setDate] = useState("");
    const [isDateInputFocused, setDateInputFocused] = useState(false);

    const handleFAQSubmit = async (e) => {
        e.preventDefault();

        // Validation checks
        if (!question.trim() || !answer.trim()) {
            window.alert(
                "Please provide both question and answer for the FAQ."
            );
            return;
        }

        const response = await fetch("/api/save-faq", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ question, answer }),
        });

        if (response.ok) {
            setQuestion("");
            setAnswer("");
            window.alert("FAQ successfully saved!");
        }
    };

    const handleArticleSubmit = async (e) => {
        e.preventDefault();

        // Validation checks
        if (!authorName.trim() || !date || !articleContent.trim()) {
            window.alert(
                "Please provide the author name, date, and article content."
            );
            return;
        }

        const response = await fetch("/api/save-article", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ authorName, date, content: articleContent }),
        });

        if (response.ok) {
            setAuthorName("");
            setDate("");
            setArticleContent("");
            window.alert("Article successfully saved!");
        }
    };

    return (
        <div>
            <h1>Content Management</h1>
            <hr />

            <label className="mt-5">
                Choose Content Type:
                <select
                    value={contentType}
                    onChange={(e) => setContentType(e.target.value)}
                >
                    <option value="FAQ">FAQ</option>
                    <option value="Article">Article</option>
                </select>
            </label>

            {contentType === "FAQ" && (
                <form onSubmit={handleFAQSubmit}>
                    <h5>Add a FAQ</h5>
                    <input
                        type="text"
                        placeholder="Enter FAQ title"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                    <ReactQuill
                        className="react-quill-faq"
                        value={answer}
                        onChange={setAnswer}
                        placeholder="Enter FAQ description"
                        theme="snow"
                    />
                    <button className="submit-btn" type="submit">
                        Submit FAQ
                    </button>
                </form>
            )}

            {contentType === "Article" && (
                <form onSubmit={handleArticleSubmit}>
                    <h5>Add an Article</h5>
                    <input
                        type="text"
                        placeholder="Author's Name"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                    />
                    {!isDateInputFocused ? (
                        <input
                            type="text"
                            placeholder="Publication Date"
                            onFocus={() => setDateInputFocused(true)}
                        />
                    ) : (
                        <input
                            type="date"
                            value={date}
                            onBlur={() => setDateInputFocused(false)}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    )}
                    <ReactQuill
                        className="react-quill-article"
                        value={articleContent}
                        onChange={setArticleContent}
                        placeholder="Enter Article Content"
                        theme="snow"
                    />
                    <button className="submit-btn" type="submit">
                        Submit Article
                    </button>
                </form>
            )}
        </div>
    );
}
