import Login from './Login'
import Reset from './Reset'
import './App.css';
import { useStytch, useStytchUser } from '@stytch/react'
import { useEffect, useState } from 'react'



export default function App() {
  const [passwordResetToken, setPasswordResetToken] = useState('')
  const [error, setError] = useState('')
  const { user } = useStytchUser()
  const stytch = useStytch()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const tokenType = params.get('stytch_token_type');

    const authenticateMagicLink = async () => {
      try {
        await stytch.magicLinks.authenticate(token, { session_duration_minutes: 60 })
      } catch (err) {
        setError(err.error_message)
      }
    }

    if (token && tokenType === 'reset_password') {
      setPasswordResetToken(token);
    }

    if (token && tokenType === 'login') {
      authenticateMagicLink()
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (user && token) {
      window.location.replace('/')
    }
  }, [user])

  if (user) {
    return (
      <div className="login-container">
        <p>Welcome, {user.user_id}</p>

        <h1>Member Dashboard</h1>
        <div class="container">
          <div class="card">
            <div class="card-header">
              <img src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="rover" />
            </div>
            <div class="card-body">
              <span class="tag tag-teal">Coding</span>
              <h4>
                Neil McNeil Robotics Team Github Account
              </h4>
              <p>
                All the code for the team is uploaded to this account: <a href="https://github.com/NeilMcNeil/"> Link</a>
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <img src="https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="ballons" />
            </div>
            <div class="card-body">
              <span class="tag tag-purple">Docs</span>
              <h4>
                Documentation for the Various Technology
              </h4>
              <p>
                Docs the the WPILIB Docs: <a href="https://docs.wpilib.org/en/stable/docs/zero-to-robot/introduction.html">Link</a><br></br>
                Docs to the CTRE Hardware: <a href="https://v5.docs.ctr-electronics.com/en/stable/">Link</a><br></br>
                FRC Game Manuel: <a href="https://firstfrc.blob.core.windows.net/frc2023/Manual/2023FRCGameManual.pdf">Link</a>
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <img src="https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="city" />
            </div>
            <div class="card-body">
              <span class="tag tag-pink">Events</span>
              <h4>
                Upcoming Robotics Events
              </h4>
              <p>
                2023 FRC Newmarket: <a href="https://frc-events.firstinspires.org/2023/ONNEW">Link</a><br></br>
                2023 FRC McMaster: <a href="https://www.firstroboticscanada.org/event/mcmaster/">Link</a>
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <button onClick={() => stytch.session.revoke()}>Log out</button>
      </div>

    );
  } else if (passwordResetToken) {
    return <Reset passwordResetToken={passwordResetToken} />
  } else {
    return (
      <>
        {error && <h3>{error}</h3>}

        <Login />
      </>
    )
  }
}
