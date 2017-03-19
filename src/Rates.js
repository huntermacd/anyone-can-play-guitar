import React from 'react';
import './Rates.css'

const Rates = () => {
  return (
    <div className='Rates'>
      <h3>Rates</h3>
      <table>
        <thead>
          <tr>
            <th>Length</th>
            <th>Location</th>
            <th>Per Lesson</th>
            <th>Monthly Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>60 min.</td>
            <td>Your Home</td>
            <td>$60</td>
            <td>$240</td>
          </tr>
          <tr>
            <td>60 min.</td>
            <td>Online</td>
            <td>$50</td>
            <td>$200</td>
          </tr>
        </tbody>
      </table>
      <p>
        I book lessons 1 month at a time, with no long-term commitment.
        This includes 4 lessons, booked once a week. I give lessons in-person
        within 20 mi. of Boulder, CO. Or online via Google Hangouts.
      </p>
      <p>
        It's important to me that you get an opportunity to evaluate my
        teaching style before spending your money, so I offer <em>one
        free lesson</em> to get you started. Book yours today!
      </p>
    </div>
  );
}

export default Rates;
