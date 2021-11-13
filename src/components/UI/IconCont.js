import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
    iconCont: {
        margin: theme.spacing(5, 'auto', 0),
        textAlign: 'center',
        width: '60px',
        height: '60px',
        lineHeight: '57px',
        borderRadius: '50%',
        background: '#1de90e',
        color: '#fff',
        cursor: 'pointer',
        boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'
    },
    IconContWidth: {
        width: '30px',
        height: '30px',
        lineHeight: '27px',
        margin: theme.spacing(0, 0.75, 0, 0),
        '&:last-of-type': { margin: 0 },
        '& svg': { width: '20px' }
    },
    delIcon: { backgroundColor: '#fff !important', color: '#eb3738' }
}));

// ----------------------------------------------------------------------

const IconCont = props => {
    const classes = useStyles();

    return (
        <div
            className={classes.iconCont + " " + classes[props.IconContWidth] + " " + classes[props.delIcon]}
            style={{ backgroundColor: props.bg }}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    )
}

export default IconCont