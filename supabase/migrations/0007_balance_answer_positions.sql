-- Spread correct answers evenly across A–D in the starter bank. Safe to re-run.
--
-- In the starter bank most correct answers were choice A (39 of 45 in Reading & Writing),
-- so students could guess from position. For each multiple-choice starter question,
-- the correct choice is swapped with the choice at its target position (cycling A, B, C, D
-- in id order). Students' past responses are remapped the same way, so "your answer"
-- in the missed-questions list still points at the choice they picked.

begin;

create temporary table balance_swap on commit drop as
select id, answer_index as old_pos, ((row_number() over (order by id) - 1) % 4)::smallint as new_pos
from public.ascend_questions
where source = 'bank' and choices is not null;

delete from balance_swap where old_pos = new_pos;

-- Past responses are the chosen index as text ('0'–'3').
update public.ascend_answers a
set response = case a.response
    when s.old_pos::text then s.new_pos::text
    when s.new_pos::text then s.old_pos::text
    else a.response end
from balance_swap s
where a.question_id = s.id and a.response in (s.old_pos::text, s.new_pos::text);

update public.ascend_questions q
set choices = jsonb_set(jsonb_set(q.choices,
                array[s.new_pos::text], q.choices -> s.old_pos),
                array[s.old_pos::text], q.choices -> s.new_pos),
    answer_index = s.new_pos
from balance_swap s
where q.id = s.id;

-- Three explanations named the letter of the old position.
update public.ascend_questions
set explanation = replace(explanation, 'Only choice A ', 'Only the correct choice ')
where source = 'bank' and explanation like '%Only choice A %';

commit;
