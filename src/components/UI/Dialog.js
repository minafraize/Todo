import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Dialog,
    DialogContent,
    useMediaQuery
} from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
    dialogContent: {
        padding: theme.spacing(2)
    },
    dialogWidth: {
        [theme.breakpoints.up('sm')]: {
            minWidth: '500px',
        },
    },
}));

// ----------------------------------------------------------------------

const Modal = props => {
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Dialog
            fullScreen={fullScreen}
            fullWidth={props.fullWidth}
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="responsive-dialog-title"
            classes={{ paper: classes[props.dialogWidth] }}
        >
            <DialogContent className={classes.dialogContent}>
                {props.children}
            </DialogContent>
        </Dialog>
    )
}

export default Modal