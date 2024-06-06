
"use client"

import { useState } from "react"
import { Button } from "@/app/_components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/app/_components/ui/dialog"
import { Label } from "@/app/_components/ui/label"
import { Input } from "@/app/_components/ui/input"

export default function Component() {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 (555) 987-6543",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "+1 (555) 456-7890",
    },
  ])
  const [editingProfile, setEditingProfile] = useState(null)
  const [newProfile, setNewProfile] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const handleEditProfile = (profile) => {
    setEditingProfile(profile)
    setNewProfile({
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
    })
  }
  const handleSaveProfile = () => {
    if (editingProfile) {
      const updatedProfiles = profiles.map((profile) => {
        if (profile.id === editingProfile.id) {
          return { ...profile, ...newProfile }
        }
        return profile
      })
      setProfiles(updatedProfiles)
    } else {
      const newProfileWithId = { id: profiles.length + 1, ...newProfile }
      setProfiles([...profiles, newProfileWithId])
    }
    setEditingProfile(null)
    setNewProfile({ name: "", email: "", phone: "" })
  }
  const handleDeleteProfile = (profileId) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== profileId)
    setProfiles(updatedProfiles)
  }
  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Add Profiles</h1>
        <p className="text-gray-500 mt-2">Manage your user profiles here.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <div key={profile.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-medium">{profile.name}</h2>
                <p className="text-gray-500">{profile.email}</p>
                <p className="text-gray-500">{profile.phone}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={() => handleEditProfile(profile)}>
                  <PenIcon className="h-5 w-5" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="text-red-500"
                  onClick={() => handleDeleteProfile(profile.id)}
                >
                  <TrashIcon className="h-5 w-5" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add New Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{editingProfile ? "Edit Profile" : "Add New Profile"}</DialogTitle>
              <DialogDescription>
                {editingProfile ? "Update the profile information." : "Fill out the form to add a new user profile."}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter name"
                  value={newProfile.name}
                  onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={newProfile.email}
                  onChange={(e) => setNewProfile({ ...newProfile, email: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  placeholder="Enter phone number"
                  value={newProfile.phone}
                  onChange={(e) => setNewProfile({ ...newProfile, phone: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSaveProfile}>
                {editingProfile ? "Save Changes" : "Save Profile"}
              </Button>
              <div>
                <Button variant="outline">Cancel</Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

function PenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}