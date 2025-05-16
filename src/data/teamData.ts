import osamah from '../assets/osamah.jpg'

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const teamData: TeamMember[] = [
  {
    name: 'Dr Osamah Ahmad',
    role: 'Founder & Doctor',
    image: osamah,
    bio: 'Fluent in medicine and coding. Passionate about health tech. and workflow optimisation.'
  }
];