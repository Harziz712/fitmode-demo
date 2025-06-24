'use client';

import { useState } from 'react';
import { teamMembers } from '../data/data';
import { TeamMemberCard } from './ui/TeamMemberCard';
import { TeamModal } from './ui/TeamModal';


const OurTeam = () => {
  const [selected, setSelected] = useState<any>(null);
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('All');

  const filtered = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(search.toLowerCase()) &&
      (role === 'All' || member.role.toLowerCase().includes(role.toLowerCase()))
  );

  const roles = ['All', ...new Set(teamMembers.map((m) => m.role.split(',')[0]))];

  return (
    <section className="min-h-screen px-4 py-20 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">Meet Our Team</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 items-center justify-between">
        <input
          type="text"
          placeholder="Search by name..."
          className="px-4 py-2 rounded-md bg-neutral-800 border border-neutral-600 text-white w-full sm:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-4 py-2 rounded-md bg-neutral-800 border border-neutral-600 text-white"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          {roles.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((member) => (
          <TeamMemberCard
            key={member.id}
            member={{
              ...member,
              socials: Object.fromEntries(
                Object.entries(member.socials).map(([k, v]) => [k, v ?? ""])
              ),
            }}
            onClick={() => setSelected(member)}
          />
        ))}
      </div>

      {/* Modal */}
      <TeamModal member={selected} isOpen={!!selected} onClose={() => setSelected(null)} />
    </section>
  );
}

export default OurTeam;