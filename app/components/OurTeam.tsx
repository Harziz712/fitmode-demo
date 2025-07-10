'use client';

import { useState } from 'react';
import { teamMembers } from '../data/data';
import { TeamMemberCard } from './ui/TeamMemberCard';
import { TeamModal } from './ui/TeamModal';
import React from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';

const MEMBERS_PER_PAGE = 3;

const OurTeam = () => {
    const [selected, setSelected] = useState<any>(null);
    const [search, setSearch] = useState('');
    const [role, setRole] = useState('All');
    const [visibleCount, setVisibleCount] = useState(MEMBERS_PER_PAGE);

    const filtered = teamMembers.filter(
        (member) =>
            member.name.toLowerCase().includes(search.toLowerCase()) &&
            (role === 'All' || member.role.toLowerCase().includes(role.toLowerCase()))
    );

    const roles = ['All', ...new Set(teamMembers.map((m) => m.role.split(',')[0]))];

    const handleShowMore = () => {
        setVisibleCount(filtered.length);
    };

    const handleShowLess = () => {
        setVisibleCount(MEMBERS_PER_PAGE);
    };

    // Reset visibleCount if filters change
    React.useEffect(() => {
        setVisibleCount(MEMBERS_PER_PAGE);
    }, [search, role]);

    return (
        <section className="min-h-screen px-4 py-20 bg-black text-white">
            <h1 className="text-3xl font-bold mb-6 text-center w-full ">Meet Our Team</h1>

            {/* Filters */}
            <div className="flex  flex-wrap gap-4 mb-6 items-center justify-center px-4 mt-10 w-full">
                <div className="relative w-full sm:w-1/3 rounded-full p-[2px] bg-gradient-to-r from-teal-500 via-blue-500 to-green-500">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        className="px-4 py-2 rounded-full bg-neutral-800 border-none text-white w-full outline-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="relative rounded-md p-[2px] bg-gradient-to-r from-teal-500 via-blue-500 to-green-500">
                    <select
                        className="px-4 py-2 rounded-md bg-neutral-800 border-none text-white outline-none"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        {roles.map((r) => (
                            <option key={r} value={r}>{r}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-5 px-4 max-w-6xl justify-center mx-auto">
                {filtered.slice(0, visibleCount).map((member) => (
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

            {/* Show More / Show Less Buttons */}
            <div className="flex justify-center mt-8 gap-4">
                {visibleCount < filtered.length && (
                    <button
                        onClick={handleShowMore}
                        className="px-6 py-2 text-sm rounded-full bg-gradient-to-r from-teal-500 via-blue-500 to-green-500 text-white font-semibold hover:opacity-90 transition"
                    >
                        Load More Members <PlusIcon className="inline ml-2" />
                    </button>
                )}
                {visibleCount > MEMBERS_PER_PAGE && (
                    <button
                        onClick={handleShowLess}
                        className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold hover:opacity-90 transition"
                    >
                        Show Less <MinusIcon className="inline ml-2" />
                    </button>
                )}
            </div>

            {/* Modal */}
            <TeamModal member={selected} isOpen={!!selected} onClose={() => setSelected(null)} />
        </section>
    );
}

export default OurTeam;