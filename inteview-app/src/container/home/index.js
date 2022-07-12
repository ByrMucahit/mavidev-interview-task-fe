import MetaHeader from "../meta/header";
import styles from "../../../styles/Home.module.css";
import {Layout} from "antd";
import HeaderComponent from "../../components/typography/header";
import {DEFAULT_HEADER, DEFAULT_TEXT} from "../../../public/constant";
import ParagraphComp from "../../components/typography/paragragh";
import Button from "../../components/button";
const {  Footer } = Layout;


export default function HomeContainer () {

    return (
        <div className={styles.container}>
            <MetaHeader title={"create new app"}/>
            <main className={styles.main} >
                <Layout style={{maxWidth: 1200, maxHeight: 600}}>
                    <HeaderComponent content={DEFAULT_HEADER} style={{ backgroundColor:'#4A5D6D', width:'100%'}}/>
                    <ParagraphComp content={DEFAULT_TEXT}/>
                    <Footer style={{display:'flex', justifyContent: 'space-around'}}>
                        <Button backgroundColor={"#4A5D6D"} customSize={'large'}  content={'Save'} to={'adds'} icon={"save"}/>
                        <Button backgroundColor={"#4A5D6D"} customSize={'large'}  content={'Listing'} to={'lists'} icon={"lists"}/>
                    </Footer>
                </Layout>
            </main>

            <footer className={styles.footer}>
                <a>Hello world Footer</a>
            </footer>
        </div>
    )
}