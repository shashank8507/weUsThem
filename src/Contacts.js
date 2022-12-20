
import React from "react";
import {  useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Card,Table, Pagination } from 'react-bootstrap';



function Contacts() {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [contacts, setEmployees] = useState([]);
   

    useEffect(() => {

        fetch(`http://localhost:8080/api/contacts?page=${page}&perPage=${10}`)
        .then((data) => {
            return data.json();
        })
        
        .then((data) => {
        setEmployees(data); 
      }); 
    }, [page]);
   

    

    function previousPage() {
        if (page > 1) {
          setPage((prev) => prev - 1);
        }
    }
    
      function nextPage() {
        setPage((prev) => prev + 1);
    }

    

    const deletePost = async (id) => {
      await fetch(`http://localhost:8080/api/contacts/${id}`, {
         method: 'DELETE',
      }).then((response) => {
         if (response.status === 200) {
            
           
         } else {
            return;
         }
      });
      window.location.reload(false);
      };
    
      
         


       

    return <div>
        <Card id="card" style={{ width: '70rem' }}>
        
        <Card.Body>
        <Card.Title>Employee list</Card.Title>
        <Card.Text>
            Full list of Employees of the company.  
        </Card.Text>
        </Card.Body>
        </Card>

        <Table >
        <thead>
          <tr>
            <th>Image</th>
            <th>First name </th>
            <th>Last name </th>
            <th>Email </th>
            <th>Phone#</th>
            <th>Options</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((emp) => (
            
           
            <tr>
                <td> {emp.imgUrl}</td>
                <td> {emp.fName}</td>
                <td> {emp.lName}</td>
                <td> {emp.email}</td>
                <td> {emp.phone}</td>
                
                <td>  <button type="button" onClick={() => deletePost(emp._id)}>Delete</button></td>

            </tr>
           
          ))}
        </tbody>
      </Table>

      

      <Pagination>
        <Pagination.Prev onClick={previousPage} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={nextPage} />
      </Pagination>

    
      <Table >
        <thead>
          <tr>
            <th>Image</th>
            <th>First name </th>
            <th>Last name </th>
            <th>Email </th>
            <th>Phone#</th>
            <th>Options</th>
          </tr>
        </thead>

        
      </Table>

        
    </div>
}

export default Contacts;