import React from 'react'
import './Footer.css'
const MainFooter = () => {
  return (
   <>
   <div className="right-panel">
    <table>
      <thead>
        <tr>
          <th>Error Code</th>
          <th>Row #</th>
          <th>Severity</th>
          <th>Description</th>
          <th>Column Name</th>
          <th>Case</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>INF997</td>
          <td>18</td>
          <td>Warning</td>
          <td>The system inflation table is more than 3 years old.</td>
          <td>Equation/Throughput</td>
          <td></td>
        </tr>
        <tr>
          <td>PHZ630</td>
          <td>18</td>
          <td>Warning</td>
          <td>Item is a non-cost but summed with cost items.</td>
          <td>Equation/Throughput</td>
          <td></td>
        </tr>
        <tr>
          <td>INF687</td>
          <td>38</td>
          <td>Warning</td>
          <td>Appropriation defined on parent row but not on this row</td>
          <td>Approp</td>
          <td></td>
        </tr>
        <tr>
          <td>PHZ629</td>
          <td>39</td>
          <td>Warning</td>
          <td>Item is a cost but summed with non-cost items.</td>
          <td>Equation/Throughput</td>
          <td></td>
        </tr>
        <tr>
          <td>PHZ629</td>
          <td>40</td>
          <td>Warning</td>
          <td>Item is a cost but summed with non-cost items.</td>
          <td>Equation/Throughput</td>
          <td></td>
        </tr>
        <tr>
          <td>PHZ629</td>
          <td>41</td>
          <td>Warning</td>
          <td>Item is a cost but summed with non-cost items.</td>
          <td>Equation/Throughput</td>
          <td></td>
        </tr>
        <tr>
          <td>PHZ629</td>
          <td>42</td>
          <td>Warning</td>
          <td>Item is a cost but summed with non-cost items.</td>
          <td>Equation/Throughput</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
   </>
  )
}

export default MainFooter