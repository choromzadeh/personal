import _ from 'lodash';


const pagiantion = (allposts,currentPage,pageSize) => {
    const startIndex = (currentPage -1) * pageSize;
    return _(allposts).slice(startIndex).take(pageSize).value();
}
export default pagiantion;