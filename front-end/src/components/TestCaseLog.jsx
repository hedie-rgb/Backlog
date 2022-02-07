import React from "react";

/*
fetch all testcaes and after loading data it renders them
*/

class TestCaseLog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
"http://127.0.0.1:8000/api/testcases")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Fetch Testcases </h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                    name: { item.name }, 
                    version: { item.version}, 
                    group: { item.group },
                    path: { item.path }
                    </ol>
                ))
            }
        </div>
    );
}
}
export default TestCaseLog;