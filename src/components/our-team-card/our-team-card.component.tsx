import Image from "next/image";
import { Person } from "~/assets/js/team-member-data";

const OurTeamCard = (person: {person : Person }) => {
    const { name, position, image } = person.person;
    return (
        
        <div className="text-center">
        <Image className="rounded-full w-24 h-24 mx-auto"   
         width={96}
          height={96}
        src={image} alt={name}/>
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-200">
            {name}
          </h3>
          <p className="text-sm text-gray-400">
            {position}
          </p>
        </div>
      </div>
    )
}

export default OurTeamCard;