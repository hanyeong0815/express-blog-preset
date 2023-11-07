CREATE TABLE IF NOT EXISTS member.member (
  id              BIGSERIAL,
  username        varchar(50)   NOT NULL,
  password        varchar(255)  NOT NULL,
  email           varchar(255),
  gender          varchar(30),
  name            varchar(50),
  nickname        varchar(50),

  CONSTRAINT      pk_member_id              PRIMARY KEY(id),
  CONSTRAINT      uq_member_username        UNIQUE(username),
  CONSTRAINT      uq_member_email           UNIQUE(email)
);