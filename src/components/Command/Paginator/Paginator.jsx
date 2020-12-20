import React, {useState} from 'react'
import s from './Paginator.module.css'

let Paginator = ({totalItemsCount, pageSize, currentPage, portionSize = 30, ...props}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return <div className={s.pugianator}>
        {
            portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>
        }
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return (<span className={s.pageNumber}>
                <span className={currentPage === p && s.selectedPage}
                      key={p}
                      onClick={() => {
                          props.onPageChanged(p)
                      }}>{p}</span>
                </span>)
            })}
        {
            portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>
        }
    </div>

}
export default Paginator