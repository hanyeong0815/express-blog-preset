import { Member } from '@prisma/client';

// (우리가 스프링 할 땐) Persistence Entity(DB) vs Domain Model 구분해서 안정적
// 노드 진영에선 오버 스펙 될 가능성. 일단 편의상 => Partial<...>로 프리스마 엔티티의 일부 필드만 갖고 있을 수 있는 타입 생성.
interface MemberDetailReadModel
  extends Partial<Omit<Member, 'id' | 'password'>> {}

export default MemberDetailReadModel;
