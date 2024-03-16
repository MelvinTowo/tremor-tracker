import { Text } from '@tremor/react';

export default function Header() {
    return (
        <header className="bg-white shadow-tremor-card">
            <div className="mx-auto max-w-4xl px-4">
                <div className="flex justify-between items-center h-16">
                    <Text className='text-bold'>TGCS</Text>
                </div>
            </div>
        </header>
      )
    }