import { X, Linkedin, Instagram } from "lucide-react";

type ModalProps = {
  member: any;
  isOpen: boolean;
  onClose: () => void;
};

export const TeamModal = ({ member, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex  items-center justify-center p-6">
      <div className="bg-neutral-900 rounded-xl  w-[350px] h-[480px] max-w-md p-6 text-white relative">
        <button onClick={onClose} className="absolute top-2  right-4 text-xl">✖</button>
        <img src={member.image} alt={member.name} className="w-full h-64 object-cover bg-bottom rounded-lg mb-4" />
        <h2 className="text-2xl font-bold">{member.name}</h2>
        <p className="text-sm text-neutral-400 mb-2">{member.role}</p>
        <p className="text-sm mb-4">{member.bio}</p>
        <div className="flex gap-4">
          {Object.entries(member.socials).map(([key, url]) => (
            <a key={key} href={url as string} target="_blank" rel="noopener noreferrer">
              <span className="text-white text-xl hover:text-green-400">
              {key === 'twitter' ? <X size={20}/> : key === 'linkedin' ? <Linkedin size={20}/> : <Instagram size={20}/>}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
