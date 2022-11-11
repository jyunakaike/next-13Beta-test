import React from 'react';
import Link from "next/link";

import styles from'./Navigation.module.css';

const links = [
    {
        label: 'Home',
        route: '/'
    },
    {
        label:'About',
        route: '/about'
    }
]

export const Navigation = () => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <nav>
                    <ul className={styles.navigation}>
                        { 
                            links.map(({ label, route }) => (
                                <li key={route} style={{marginRight:"1rem"}}> <Link href={route}> <h4 className={styles['title-strong']}>{label}</h4> </Link>   </li>
                            ))
                        }
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    )
}
