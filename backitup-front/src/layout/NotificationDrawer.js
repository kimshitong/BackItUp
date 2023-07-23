import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/styles.css';
import axios from 'axios';

const Notification = ({ notif }) => {

  console.log(notif);

  function daysAgoFromISODate(targetISODate) {
    // Get the current date (today) in UTC
    const todayUTC = new Date();
    console.log(todayUTC);

    // Parse the target date string into a Date object and convert it to UTC
    const targetDate = new Date(targetISODate);
    console.log(targetISODate);
    const targetDateUTC = new Date(targetDate.toUTCString());
    console.log(targetDate);

    // Calculate the difference in milliseconds
    const timeDifferenceMs = todayUTC - targetDateUTC;

    // Convert milliseconds to days (1 day = 86,400,000 milliseconds)
    const daysAgo = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24));
    console.log(daysAgo);
    return daysAgo;
  }

  return (
    <div className='border rounded shadow-sm my-2 p-2'>
      <p>{notif.notificationMessage}
        <small style={{ color: "grey" }}>
          {daysAgoFromISODate(notif.notificationDateTime)}d ago
        </small>
      </p>

    </div>)
}

const NotificationDrawer = ({ show, onClose, currUser }) => {

  const [notifs, setNotifs] = useState([])
  const [reads, setReads] = useState([])

  useEffect(() => {
    loadNotif()
  }, []);

  const loadNotif = async () => {
    try {
      const result =
        await axios.get(`https://orbital-1690142964708.azurewebsites.net/api/listNotification/unread/${currUser.userID}`)
      setNotifs(result.data);
      const result2 =
        await axios.get(`https://orbital-1690142964708.azurewebsites.net/api/listNotification/read/${currUser.userID}`)
      setReads(result2.data);
    } catch (error) {

    }
  }

  return (
    <div className={`notification-drawer ${show ? 'open' : ''}`} style={{ textAlign: "left" }}>
      <div className="notification-content">
        <Button className="close-btn px-2" variant="light" onClick={onClose} style={{ color: "grey" }}>
          x
        </Button>
        <h3>Unread</h3>
        {notifs.length == 0
          ? <p style={{ color: "grey" }}>No new updates to see here.</p>
          : notifs.map((notif, index) => (
            <Notification notif={notif} />
          ))}
        <h3>Recent</h3>
        {reads.map((read, index) => (
          <Notification notif={read} />
        ))}
      </div>
    </div>
  );
};

export default NotificationDrawer;