import React from 'react'
import style from './Github.module.css'


function GithubCard({imageUrl,username,profileUrl}) {
    return (
        <div className={style.mainCard}>
            <div>
                <img src={imageUrl} alt="" />
            </div>
            <div>
                <h2>{username}</h2>
                <a href={profileUrl}>More About User</a>
            </div>
        </div>
    )
}

export default GithubCard
