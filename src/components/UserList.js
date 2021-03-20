import React, {useEffect, useState} from 'react'
import { connect } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import {getUsers} from '../actions'
import {getComparator, stableSort} from '../functions/compareFuncs'

function UserList(props) {
    const [orderBy, setOrderBy] = useState('username');
    const [order, setOrder] = useState('asc');
    const {getUsers} = props;
    const rows = props.users

    useEffect(() => {
       getUsers()
    },[getUsers])

    const handleRequestSort = (event, property) => {
        const isAsc = (orderBy === property && order === 'asc');
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    
    function EnhancedTableHead(props) {
        const { onRequestSort , users } = props;
        const createSortHandler = (property) => (event) => {
            onRequestSort(event, property);
        };
        return (
            <TableHead>
                <TableRow>
                    {Object.keys(users[0]).map( key => 
                        <TableCell key={key}>
                            <TableSortLabel 
                                direction={orderBy === key ? order : 'asc'}
                                onClick={createSortHandler(key)}>
                                    {key[0].toUpperCase()+key.slice(1,)}
                            </TableSortLabel>
                        </TableCell>
                    )}
                </TableRow>
            </TableHead>
        );
    }

  return (
    <div className="container">
        <h1 className="text-center py-3">User list</h1>
        {props.users&&
        <div className="card">
            <TableContainer>
                <Table>
                    <EnhancedTableHead users={props.users} order={order} orderBy={orderBy} onRequestSort={handleRequestSort}/>
                    <TableBody>
                    {stableSort(rows, getComparator(order, orderBy)).map((row) => 
                        <TableRow hover key={row.username}>
                            {Object.keys(props.users[0]).map((key)=>(
                                <TableCell key={key}>{row[key]}</TableCell>
                            ))}
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        }
    </div>
  );
}


const mapStateToProps = state => {
    return {
      users: state.user.users
    };
};

export default connect(mapStateToProps,{getUsers})(UserList);