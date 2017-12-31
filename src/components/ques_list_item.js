import React from 'react';


const QuesListItem = (props) => {
    const link="http://codeforces.com/problemset/problem/"+props.question.contestId+"/"+props.question.index;
    return (
        <div className="col-md-5 ">
            <li className={"btn btn-primary"}>  <a href={link}>{props.question.name}</a></li>
        </div>

    );
}
export default QuesListItem;