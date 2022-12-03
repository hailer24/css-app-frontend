import { ReactNode } from 'react';
import { dropdown } from '../../../utils/data/animations';
import Animate from '../../layout/Animate';

function DropdownWrapper({ children }: { children: ReactNode }) {
  return (
    <Animate
      variants={dropdown}
      className="absolute left-0 border rounded-lg shadow-lg top-10 bg-types-200 border-types-250 w-[200px] dropdown "
    >
      <ul className="max-w-[200px] p-2 space-y-1 overflow-y-auto max-h-96 scrollbar-content">
        {children}
      </ul>
    </Animate>
  );
}

export default DropdownWrapper;