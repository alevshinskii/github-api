import React from "react";

const RepoItem=({item})=>{

    return(
        <tr className="item">
            <td className="item-id">
                <div>
                    {item.id}
                </div>
            </td>
            <td className="item-name">
                <div>
                    <a href={item.html_url} target="_blank" rel="noreferrer">
                        {item.name}
                    </a>
                </div>
            </td>
            <td className="item-owner">
                <div>
                    <a href={item.owner.html_url} target="_blank" rel="noreferrer">
                        {item.owner.login}
                    </a>
                </div>
            </td>
            <td className="item-desc">
                <div>
                    {item.description}
                </div>
            </td>
        </tr>
    )
}

export default RepoItem;