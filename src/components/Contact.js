import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"
import { motion, useReducedMotion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

function Contact(){
    const prefersReducedMotion = useReducedMotion();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = async(data) =>{
        const userInfo={
            name: data.name,
            email: data.email,
            query: data.query
        }
        try{
            await axios.post("https://getform.io/f/pbqgzwzb",userInfo);
            toast.success("Your message has been sent");
        }catch(error){
            toast.error("An error has occurred");
        }
      }

    return(
        <motion.section
            name="Contact"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-14 md:py-20"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.7 }}
            whileHover={
                prefersReducedMotion
                    ? undefined
                    : {
                        y: -6,
                        boxShadow: "0 25px 60px rgba(59, 130, 246, 0.14)",
                        transition: { duration: 0.25 },
                      }
            }
        >
            <SpotlightCard
                radiusClass="rounded-3xl"
                glowColor="rgba(59, 130, 246, 0.22)"
                className="rounded-3xl border border-slate-200/70 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/50 p-6 md:p-10 shadow-sm backdrop-blur"
            >
                <h1 className="text-3xl font-bold mb-2">Contact me</h1>
                <p className="text-slate-700 dark:text-slate-200">Please fill out the form below and I’ll get back to you.</p>

                <div className="mt-6 flex justify-center">
                    <div className="w-full sm:w-[28rem]">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="text-2xl font-bold mb-4">Send Your Message</h2>

                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Full Name
                                    </label>
                                    <input
                                        {...register("name", { required: true })}
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="mt-1 rounded-xl w-full h-11 text-sm px-3 bg-white/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                                        placeholder="Enter your Full Name"
                                    />
                                    {errors.name && (
                                        <span className="text-sm text-red-600">This field is required</span>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Email Address
                                    </label>
                                    <input
                                        {...register("email", { required: true })}
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="mt-1 rounded-xl w-full h-11 text-sm px-3 bg-white/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                                        placeholder="Enter your Email Address"
                                    />
                                    {errors.email && (
                                        <span className="text-sm text-red-600">This field is required</span>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="query" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Message
                                    </label>
                                    <textarea
                                        {...register("query", { required: true })}
                                        id="query"
                                        name="query"
                                        rows={4}
                                        className="mt-1 rounded-xl w-full text-sm px-3 bg-white/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                                        placeholder="Enter your query"
                                    />
                                    {errors.query && (
                                        <span className="text-sm text-red-600">This field is required</span>
                                    )}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="mt-6 w-full rounded-xl bg-slate-900 px-4 py-2.5 text-white font-semibold transition hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/20"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </SpotlightCard>
        </motion.section>
    )
}

export default Contact;