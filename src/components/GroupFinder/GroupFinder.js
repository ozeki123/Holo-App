import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './GroupFinder.scss';

const GroupFinder = () => {
  const [groups, setGroups] = useState([]);

  const getGroups = () => {
    axios.get('/groups')
      .then((res) => {
        const allGroups = res.data;
        setGroups(res.data);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getGroups();
    console.log(groups);
  }, [])

  return (
    <section>
      <Link to="/groups/create">Create a group</Link>
      {
        groups.map((group) =>  {
          return(
            <div>
              {group.title}
              {group.owner}
              
            </div>
          )
        })
      }
      
    </section>
      
  )
}

export default GroupFinder;