export function TableData() {
    const data = [
        { id: 1, name: "alice", age: 25 },
        { id: 2, name: "gilo", age: 67 },
        { id: 3, name: "frlo", age: 55 } 
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.age}</td>
                        </tr>
                    )) 
                }
            </tbody>
        </table>
    );
}
