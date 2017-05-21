<?php

$guests = json_decode(file_get_contents('guests.json'), true);

?>
<html><body>
<table>
<thead>
<tr>
<th>Guest Name</th>
<th>+1 Name</th>
<th>Attending</th>
<th>Comments</th>
</tr>
</thead>
<tbody>
<?php foreach($guests as $guest): ?>
<tr>
<td><?php echo $guest['guest_title'] . ' ' . $guest['guest_name']; ?></td>
<td><?php echo $guest['plusone_title'] . ' ' . $guest['plusone_name']; ?></td>
<td><?php echo $guest['rsvp']; ?></td>
<td><?php echo $guest['message']; ?></td>
</tr>
<?php endforeach; ?>
</tbody>
</table>
</body></html>
