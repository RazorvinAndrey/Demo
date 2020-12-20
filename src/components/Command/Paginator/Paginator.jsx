import React from 'react'
import s from './Paginator.module.css'

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div className={s.nums}>
        {pages.map(p => {
            return (<span className={props.currentPage === p && s.selectedPage}
                          onClick={() => {
                              props.onPageChanged(p)
                          }}>{p}</span>)
        })}
    </div>

}
export default Paginator