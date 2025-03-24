import { HeroHighlight } from "./ui/hero-highlight"

export default function HeroSection() {
    return (
        <div>
            <HeroHighlight>
                <div className="space-y-6 px-1 text-center" >
                    <h1 className="text-3xl sm:text-3xl lg:text-5xl font-extrabold text-white">
                        Welcome to the Software Developers Hub
                    </h1>
                    <p className="text-sm sm:text-lg lg:text-xl max-w-2xl mx-auto text-gray-300">
                        Building innovative solutions with cutting-edge technologies. Explore seamless
                        designs, intuitive user experiences, and the power of modern development tools.
                    </p>
                    {/* <div className="space-y-4 text-sm sm:text-base lg:text-lg text-gray-300">
            <p>
              <Highlight>Skills:</Highlight> Full-Stack Development, UI/UX Design, API Integration, Cloud Solutions
            </p>
            <p>
              <Highlight>Passion:</Highlight> Turning ideas into robust, scalable, and efficient software systems.
            </p>
          </div> */}
                </div>
            </HeroHighlight>
        </div>
    )
}
