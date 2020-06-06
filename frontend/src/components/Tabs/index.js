import React from 'react';

export default function ({locations, currentTab, setState}) {
    return (
        <nav style={{marginTop: '100px'}}>
            <a className={(currentTab==='all') ? 'tab-active' : 'tab-inactive'} onClick={()=>setState('all')}>All</a>
            {locations.map((item, i) =>  <a className={(currentTab===i) ? 'tab-active' : 'tab-inactive'} onClick={()=>setState(i)}>{item.location}
            </a>)}
        </nav>
    )

}

