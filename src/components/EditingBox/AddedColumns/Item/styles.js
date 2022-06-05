import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        minWidth: '420px',
        width: 'fit-content',
        '& .MuiOutlinedInput-root': {
            marginRight: theme.spacing(1),
        },
    },
    deleteButton: {
        backgroundColor: '#EB5757',
        borderRadius: '50%',
        width: '60px',
        height: '60px'
    }
}));