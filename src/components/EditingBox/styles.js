import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    addButton: {
        backgroundColor: "#6200EE",
        color: "white",
        width: '200px',
        justifyContent: 'space-around',
        marginRight: theme.spacing(1)
    },
    inputFile: {
        display: 'none',
    }
}));