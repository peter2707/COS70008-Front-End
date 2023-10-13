export function ContentManagement() {
    return (
        <div>
            <h1>Content Management</h1>
            <hr />
            <h1>Add an FAQ</h1>
            <input type="text" placeholder="Enter FAQ title" />
            <div 
                contentEditable={true} 
                style={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    minHeight: '100px',
                    marginTop: '10px',
                }}
                placeholder="Enter FAQ description"
            ></div>
        </div>
    );
}
