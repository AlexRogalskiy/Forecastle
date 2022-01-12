import React, {useEffect} from "react";
import {connect} from "react-redux";

import AppList from "../AppList/AppList";
import {SearchAppBar, Footer} from "../../components";
import * as configStore from "../../redux/app/configModule";
import {createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
    palette: {
        primary: {
            main: "#68288C"
        }
    },
});

const App = ({loadConfig}) => {
    useEffect(() => {
        loadConfig();
    }, [loadConfig]);

    return (
        <React.Fragment>
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <SearchAppBar/>
                <AppList/>

                {/* Footer */}
                <Footer/>
                {/* End footer */}
            </MuiThemeProvider>
        </React.Fragment>
    );
};

const mapDispatchToProps = dispatch => ({
    loadConfig: () => dispatch(configStore.loadConfig())
});

export default connect(
    null,
    mapDispatchToProps
)(App);
