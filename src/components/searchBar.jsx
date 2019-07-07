import React from 'react';

const SearchBar = () => {
    return ( 
    <div class="input-group my-auto">
        <input type="text" class="form-control form-control-dark " placeholder="جستجو" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        <div class="input-group-append">
            <button class="btn btn-success" type="button">بگرد</button>
        </div>
    </div> 
    );
}
 
export default SearchBar;