import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({ children }) => {
    return (
        <>
        
        <div className={styles.container}>
            <main className={styles.main}> 
                <Nav />
                {children}
                <Footer />
            </main>
        </div>
        </>
    )
}

export default Layout