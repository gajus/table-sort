<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript" src="jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="jquery.ay-table-sort.js"></script>
	
	<style>
	html, body { margin: 0; font: 12px/20px monospace; }
	
	body { padding: 20px; }
	
	table { table-layout: fixed; border-collapse: collapse; width: 100%; }
	thead { background: #b9c9fe; }
	td,th { padding: 5px; }
	tbody tr { border-top: 1px solid #fff; background: #e8edff; }
	
	th.name { width: 200px; }
	
	a { color: #f00; text-decoration: underline; }
	
	.authorship { margin-top: 20px; }
	
	tbody { border-top: 5px solid #fff; }
	
	thead th { text-align: left; cursor: pointer; }
	thead th.ay-sort-asc:after { content: 'asc'; color: #666; margin-left: 5px; font-weight: normal; }
	thead th.ay-sort-desc:after { content: 'desc'; color: #666; margin-left: 5px; font-weight: normal; }
	</style>
</head>
<body>
	<script type="text/javascript">
	$(function(){
		$.ay.tableSort({target: $('table'), debug: true});
	});
	</script>
	<table>
		<thead>
			<tr>
				<th class="ay-sort">a</th>
				<th class="ay-sort">b</th>
			</tr>
		</thead>
		<tbody>
			<?php for($i = 0; $i < 1000; $i++):?>
			<tr>
				<td><?=mt_rand(0,99999)?></td>
				<td><?=substr(md5(rand()), 0, 10);?></td>
			</tr>
			<?php endfor;?>
		</tbody>
	</table>
	<div class="authorship">
		This is a demo of a <a href="https://github.com/gajus/table-sort" target="_blank">jQuery table-sort plugin</a>.
	</div>
</body>
</html>