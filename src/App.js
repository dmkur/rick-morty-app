import {About, Header} from "./pages";

const App = () => {
    return (
        <div style={{display: 'flex', height: "100vh", alignItems: "stretch"}}>
            <div style={{flex: 0.2, background: '#f2f2f2'}}>
                <Header/>
            </div>
            <div>
                <About/>
            </div>
        </div>
    )
};

export {App};