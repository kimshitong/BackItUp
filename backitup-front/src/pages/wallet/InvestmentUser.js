import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import InvestmentRowTitle from './InvestmentRowTitle'
import InvestmentRowView from './InvestmentRowView'

export default function InvestmentUser({ currUser }) {

  const [invs, setInvs] = useState([])
  const [invsPost, setInvsPost] = useState([])

  useEffect(() => {
    loadInvs()
  }, []);

  const loadInvs = async () => {
    const result = await axios.get(`https://orbital-1690142964708.azurewebsites.net/api/listinvest/user/${currUser.userID}`)
    setInvs(result.data)

    // const post = await axios.get(`https://orbital-1690142964708.azurewebsites.net/api/postbyshare/${post.shareId}")`)
    // setInvsPost(post.data)
  }

  return (
    <div className="container">
      <div className="border rounded p-4 mt-2 shadow">
        <h2 className="m-1" style={{ textAlign: "left" }}>Portfolio</h2>

        <div>
          <div className='py-4'>
            <table className="table border shadow">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  {/* <th scope="col">Project</th> */}
                  <th scope="col">Project</th>
                  <th scope="col">Company</th>
                  <th scope="col">Value</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  invs.map((inv, index) => (
                    <tr>
                      <th scope="row" key="index">{index + 1}</th>
                      {/* <InvestmentRow inv={inv} /> */}
                      {/* <td>{inv}</td> */}
                      <td style={{ textAlign: "center" }}>
                        <InvestmentRowTitle inv={inv} />
                      </td>
                      <td>{inv.share.user.userName}</td>
                      <td>{inv.shareAmount * inv.share.shareCountPrice}</td>
                      <td>
                        <InvestmentRowView inv={inv} />
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

