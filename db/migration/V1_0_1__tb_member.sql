CREATE TABLE IF NOT EXISTS MEMBER.MEMBER (
  id              BIGSERIAL,
  username        varchar(50),
  password        varchar(255),
  email           varchar(255),
  gender_type     varchar(30),
  name            varchar(50),
  nickname        varchar(50),

  constraint      pk_profile_id       primary key(id)
);