import { Member } from '@prisma/client';
import beans from '../../config/beans';

const memberRepository = beans.memberRepository();

const signUp = async (member: Member) => {
  return memberRepository.create({
    data: member,
  });
};

// Add another functions

export default {
  signUp,
  // ... another functions
};
