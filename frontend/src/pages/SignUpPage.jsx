import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Lock, Mail, MessageSquare, User, Loader2} from "lucide-react";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern"
import toast from "react-hot-toast"


function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
if(!formData.fullName.trim()) return toast.error("Full name is required")
if(!formData.email.trim()) return toast.error("Email is required")
if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format")

if(!formData.password) return toast.error("Password is required")
if(formData.password.length<6) return toast.error("Password must be at least 6 characters")

return true

  };
  const handleSubmit = (e) => {
    e.preventDefault();
   const success = validateForm()

   if(success ===true) signup(formData)
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* left side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="w-full max-w-md space-y-8">
            {/* LOGO */}
            <div className="text-center mb-8">
              <div className="flex flex-col items-center gap-2 group">
                <div
                  className="size 12 rounded-x1 bg-primary/10 flex items-center justify-center
group-hover:bg-primary/20 transition-colors"
                />
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Create Account</h1>
              <p className="text-base-content/60">
 Get started with your free account
              </p>
            </div>

<form onSubmit={handleSubmit} className="space-y-6">
<div className="form-control">
  <label className="label">
    <span className="label-text font-medium">Full Name</span>
  </label>

  <div className="flex items-center input input-bordered mt-1  gap-2 w-full">
    <User className="w-5 h-5 text-base-content/40" />
    <input
      type="text"
      required
      placeholder="Full Name"
      className="grow bg-transparent focus:outline-none"
      value={formData.fullName}
      onChange={(e) =>
        setFormData({ ...formData, fullName: e.target.value })
      }
    />
  </div>
</div>


<div className="form-control">
  <label className="label">
    <span className="label-text font-medium">Email</span>
  </label>

  <div className="flex items-center input input-bordered gap-2 mt-1 w-full">
    <Mail className="w-5 h-5 text-base-content/40" />
    <input
      type="email"
      required
      placeholder="you@gmail.com"
      className="grow bg-transparent focus:outline-none"
      value={formData.email}
      onChange={(e) =>
        setFormData({ ...formData, email: e.target.value })
      }
    />
  </div>
</div>






<div className="form-control">
  <label className="label">
    <span className="label-text font-medium">Password</span>
  </label>

  <div className="relative w-full mt-1 ">
    {/* Lock icon on the left */}
    <div className="absolute inset-y-0 left-0 pl-3  flex items-center pointer-events-none z-10">
      <Lock className="w-5 h-5 text-base-content/40" />
    </div>

    {/* Input field */}
    <input
      type={showPassword ? "text" : "password"}
      className="input input-bordered w-full pl-10 pr-10"
      placeholder="........"
      value={formData.password}
      onChange={(e) =>
        setFormData({ ...formData, password: e.target.value })
      }
    />

    {/* Eye toggle on the right */}
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"
    >
      {showPassword ? (
        <EyeOff className="w-5 h-5 text-base-content/40" />
      ) : (
        <Eye className="w-5 h-5 text-base-content/40" />
      )}
    </button>
  </div>
</div>



<button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
{isSigningUp ? (
<>
<Loader2 className="size-5 animate-spin" />
Loading...
</>
):(
"Sign in"
)}
</button>



</form>


<div className="text-center">
<p className="text-base-content/60">
Already have an account?{" "}
<Link to="/login" className="link link-primary">
Sign in
</Link>
</p>
</div>


          </div>
        </div>
      </div>


<AuthImagePattern
title="Join our community"
subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
/>

    </div>
  );
}

export default SignUpPage;
