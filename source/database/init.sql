BEGIN;

-- Comment when in deployed
DROP TABLE IF EXISTS user_input;

CREATE TABLE user_input (
  id SERIAL PRIMARY KEY,
  category TEXT NOT NULL,
  tool_name VARCHAR(50),
  tool_description VARCHAR(280),
  tool_link VARCHAR(75),
  added_by VARCHAR(50),
  love INTEGER 
);

INSERT INTO user_input (category, tool_name, tool_description, tool_link, added_by, love) VALUES
('Entertainment', 'Netflix', 'Stream shows and movies', 'netflix.com', 'ilovenetflix', 3),
('Work', 'Jitsi', 'Video conferencing with cool features like custom room links', 'jitsi.org/', 'jitsijack', 0)
;

COMMIT;