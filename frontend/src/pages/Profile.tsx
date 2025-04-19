import { useEffect, useState } from 'react'
import axios from 'axios'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

interface UserProfile {
  bio: string
}

const Profile = () => {
  const { isAuthenticated } = useAuth()
  const [bio, setBio] = useState<string>('')
  const navigate = useNavigate()

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get<UserProfile>('/api/profiles/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setBio(response.data.bio || '')
      } catch (error) {
        console.error('Error fetching profile:', error)
      }
    }

    if (isAuthenticated) {
      fetchProfile()
    }
  }, [isAuthenticated])

  // Update profile
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      await axios.post(
        '/api/profiles/create',
        { bio },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      alert('Profile updated successfully!')
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full p-2 border rounded h-32 resize-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Save Profile
        </button>
      </form>
    </div>
  )
}

export default Profile
