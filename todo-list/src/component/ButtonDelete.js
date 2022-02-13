import React from 'react';
import '../component_css/button.css'

function ButtonDelete({functionDelete}) {


    return (       
            <button class="button-delete"  onClick={functionDelete}>Delete</button>
    )
}

export default ButtonDelete;