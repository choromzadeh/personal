import React from 'react';
import _ from 'lodash';

const Pagination = ({currentPage,pageSize,itemCount,onPageChange}) => {
    const pageCount = Math.ceil(itemCount / pageSize)

    if (pageCount === 1){return null}
    const pages = _.range(1,pageCount + 1)
    return ( 
        <nav>
          <ul class="pagination justify-content-center">
              {pages.map(page =>(
                  <li className={page === currentPage ? "page-item active": "page-item"} key={page}><a class="page-link" href="#" onClick={()=>onPageChange(page)} >{page}</a></li>
                  
              ))
              }
          </ul>
        </nav>
     );
}
 
export default Pagination;