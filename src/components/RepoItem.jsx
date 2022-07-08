import React from "react";
import { useState } from "react";

const RepoItem=({item})=>{

    return(
        <div className="item">
            <div className="item-id">
                {item.id}
            </div>
            <div className="item-name">
                <a href={item.html_url}>
                    {item.name}
                </a>
            </div>
            <div className="item-owner">
                <a href={item.html_url}>
                    {item.owner.login}
                </a>
            </div>
            <div className="item-desc">
                {item.description}
            </div>
        </div>
    )
}

export default RepoItem;