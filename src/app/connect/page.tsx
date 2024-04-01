import Heading from "@/components/typography/Heading";

export default function Connect() {
  return (
    <div className="w-full flex mt-20 py-8 justify-center">
      <div className="w-3/4 flex flex-col">
        <div className="w-full flex justify-center">
          <Heading text="Connect" />
        </div>
        <div className="w-full relative border border-[#727C57] rounded-sm p-12">
          <form className="flex flex-col w-full gap-2">
            <div className="flex flex-row w-full gap-4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="fname" className="text-[#fefffa]">First Name:</label>
                <input type="text" className="bg-transparent border border-[#727C57] text-grey-800 p-2 rounded-sm text-[#fefffa] focus:rounded-sm" id="fname" name="fname" required />
              </div>

              <div className="flex flex-col w-1/2">
                <label htmlFor="lname" className="text-[#fefffa]">Last Name:</label>
                <input type="text" className="bg-transparent border border-[#727C57] text-grey-800 p-2 rounded-sm text-[#fefffa] focus:rounded-sm" id="lname" name="lname" required />
              </div>
            </div>

            <div className="flex flex-col">
            <label htmlFor="email" className="text-[#fefffa]">Email:</label>
            <input type="email" className="bg-transparent border border-[#727C57] text-grey-800 p-2 rounded-sm text-[#fefffa] focus:rounded-sm" id="email" name="email" required />
            </div>
            
            <div className="flex flex-col">
            <label htmlFor="message" className="text-[#fefffa]">Your Message:</label>
            <textarea id="message" className="bg-transparent border border-[#727C57] text-grey-800 p-2 rounded-sm text-[#fefffa] focus:rounded-sm" name="message" required></textarea>
            </div>

            <input type="submit" value="Submit" className="border border-[#727C57] bg-[#727C57] p-2"/>
          </form>
        </div>
      </div>
    </div>
  );
}
